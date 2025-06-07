import { MaritalStatus } from "./MaritalStatus";
import { PersonDegree } from "./PersonDegree";
import { PersonEducation } from "./PersonEducation";

/**
 * Person private data
 * 人员私有数据
 */
export type PersonPrivateData = {
  /**
   * Gender
   * 性别
   */
  gender?: string;

  /**
   * Birthday
   * 生日
   */
  birthday?: string | Date;

  /**
   * Ethnicity
   * 种族
   */
  ethnicity?: string;

  /**
   * Height in cm
   * 高度（厘米）
   */
  height?: number;

  /**
   * Weight in kg
   * 重量（千克）
   */
  weight?: number;

  /**
   * Marital status
   * 婚姻状况
   */
  maritalStatus?: MaritalStatus;

  /**
   * Education
   * 学历
   */
  education?: PersonEducation;

  /**
   * Education degree
   * 学位
   */
  degree?: PersonDegree;

  /**
   * Political status
   * 政治面貌
   */
  politicalStatus?: string;
};
