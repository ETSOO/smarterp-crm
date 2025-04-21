import React from "react";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonListItem } from "../../dto/person/PersonListItem";
import { ChoosePersonsData } from "../../dto/person/ChoosePersonsData";
import { PersonListDto } from "../../dto/person/PersonListDto";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ListMultipler } from "@etsoo/materialui";
import { PersonsList } from "./PersonsList";

type PersonChooserKind = "user" | "contact" | "search";

/**
 * Person chooser props
 */
export type PersonChooserProps = {
  /**
   * Person ID
   */
  personId: number;

  /**
   * Input name
   */
  name?: string;

  /**
   * On change event
   * @param items The selected items
   * @param ids The selected IDs
   * @param kind The action kind
   */
  onCheckItems?: (
    items: PersonListItem[],
    ids: number[],
    kind: PersonChooserKind
  ) => void;
};

/**
 * Person chooser
 * @param props Props
 * @returns Component
 */
export function PersonChooser(props: PersonChooserProps) {
  // Desturture
  const { personId, name, onCheckItems } = props;

  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("contact", "search", "user");

  // State
  const [data, setData] = React.useState<ChoosePersonsData>();

  // Refs
  const inputRef = React.useRef<HTMLInputElement>(null);
  const personsRef = React.useRef<{
    users: PersonListItem[];
    contacts: PersonListItem[];
    search: PersonListDto[];
  }>({ users: [], contacts: [], search: [] });

  const checkHanldler = (kind: PersonChooserKind) => {
    const { users, contacts, search } = personsRef.current;

    const items: PersonListItem[] = users;
    const ids: number[] = users.map((u) => u.id);

    const contactsFiltered = contacts.filter((u) => !ids.includes(u.id));
    items.push(...contactsFiltered);
    ids.push(...contactsFiltered.map((u) => u.id));

    const searchFiltered = search.filter((u) => !ids.includes(u.id));
    items.push(...searchFiltered);
    ids.push(...searchFiltered.map((u) => u.id));

    if (inputRef.current) {
      inputRef.current.value = ids.join(",");
    }

    onCheckItems?.(items, ids, kind);
  };

  // Effect
  React.useEffect(() => {
    crm.personApi.choose({ personId }).then((result) => {
      if (result == null) return;
      setData(result);
    });
  }, []);

  return (
    <React.Fragment>
      {name && (
        <input
          type="text"
          style={{ display: "none" }}
          name={name}
          readOnly
          ref={inputRef}
        />
      )}
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="caption">{labels.user}:</Typography>
        {data?.users && (
          <ListMultipler
            data={data.users}
            idField="id"
            primaryLabel="name"
            secondaryLabel="jobTitle"
            sx={{ height: 200, overflow: "auto", border: "1px solid #ccc" }}
            dense
            disablePadding
            listItemProps={{ disablePadding: true, disableGutters: true }}
            listItemTextProps={{
              secondaryTypographyProps: { variant: "caption" }
            }}
            onCheckItems={(items) => {
              personsRef.current.users = [...items];
              checkHanldler("user");
            }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="caption">{labels.contact}:</Typography>
        {data?.contacts && (
          <ListMultipler
            data={data.contacts}
            idField="id"
            primaryLabel="name"
            secondaryLabel="jobTitle"
            sx={{ height: 200, overflow: "auto", border: "1px solid #ccc" }}
            dense
            disablePadding
            listItemProps={{ disablePadding: true, disableGutters: true }}
            listItemTextProps={{
              secondaryTypographyProps: { variant: "caption" }
            }}
            onCheckItems={(items) => {
              personsRef.current.contacts = [...items];
              checkHanldler("contact");
            }}
          />
        )}
      </Grid>
      <Grid size={12}>
        <Typography variant="caption">{labels.search}:</Typography>
        <PersonsList
          onChange={(_event, value) => {
            personsRef.current.search = value;
            checkHanldler("search");
          }}
        />
      </Grid>
    </React.Fragment>
  );
}
