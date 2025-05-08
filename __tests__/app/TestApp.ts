import {
  INotificaseBase,
  INotification,
  Notification,
  NotificationCallProps,
  NotificationContainer,
  NotificationRenderProps
} from "@etsoo/notificationbase";
import { AddressUtils, Culture, InitCallResultData } from "@etsoo/appscript";
import { DataTypes, DomUtils, Utils } from "@etsoo/shared";
import { CrmAppBase, CrmCulture } from "../../src";

// Detected country or region
const { detectedCountry } = DomUtils;

// Detected culture
const { detectedCulture } = DomUtils;

// Supported cultures
const supportedCultures: DataTypes.CultureDefinition[] = [
  Culture.zhHans(CrmCulture.zhHans()),
  Culture.en(CrmCulture.en())
];

// Supported regions
const supportedRegions = ["CN"];

// Class implementation for tests
class NotificationTest extends Notification<any, NotificationCallProps> {
  render(props: NotificationRenderProps, className?: string, options?: any) {
    throw new Error("Method not implemented.");
  }
}

class NotificationContainerTest extends NotificationContainer<
  any,
  NotificationCallProps
> {
  protected addRaw(
    data: INotificaseBase<any, NotificationCallProps>
  ): INotification<any, NotificationCallProps> {
    return new NotificationTest(data.type, data.content);
  }
}

// Container
var container = new NotificationContainerTest((update) => {});

// Is local test (integration test)
// Make sure your local environment is ready
export const isLocalTest = process.env.NODE_ENV === "local";

// Test application class
export class TestApp extends CrmAppBase {
  /**
   * Constructor
   * @param settings Settings
   * @param name Application name
   */
  constructor() {
    super(
      {
        appId: 0,

        /**
         * Endpoint of the API service
         */
        endpoint: "http://{hostname}:9009/api/",

        endpoints: {
          platform: {
            endpoint: "https://{hostname}:9001/api/",
            webUrl: "https://{hostname}:9000"
          }
        },

        /**
         * App root url
         */
        homepage: "/cms",

        /**
         * Web url of the cloud
         */
        webUrl: "https://localhost",

        // Detected culture
        detectedCulture,

        // Supported cultures
        cultures: supportedCultures,

        // Supported regions
        regions: supportedRegions,

        // Browser's time zone
        timeZone: Utils.getTimeZone(),

        // Current country or region
        currentRegion: AddressUtils.getRegion(
          supportedRegions,
          detectedCountry,
          detectedCulture
        ),

        // Current culture
        currentCulture: DomUtils.getCulture(
          supportedCultures,
          detectedCulture
        )![0]
      },
      "TestApp"
    );
  }

  freshCountdownUI(callback?: () => PromiseLike<unknown>): void {
    throw new Error("Method not implemented.");
  }

  initCallUpdateLocal(data: InitCallResultData, timestamp: number) {
    this.initCallUpdate(data, timestamp);
    return this.passphrase;
  }
}
