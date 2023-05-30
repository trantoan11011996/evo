import { StringLiteral } from "typescript";

export interface ISidebar {
  title: string;
  link: string;
}

export interface IFeaturesList {
  image: string;
  title: string;
  description: string;
}

export interface IAboutList {
  image: string;
  label: string;
}

export interface IProjectList {
  id: number;
  image: string;
  link: string;
  title: string;
  desc: string;
}

export interface ITechnoList {
  id: number;
  image: string;
  label: string;
}

export interface IPartnerList {
  id: number;
  image: string;
  class: string;
}
