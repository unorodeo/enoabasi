/**
 * A navigation route link
 */
export interface Navitem {
  /**
   * The label of the link
   */
  label: string;
  /**
   * The route of the link
   */
  href: `/${string}`;
}

/**
 * A navigation route link with an icon
 */
export interface NavitemWithIcon extends Navitem {
  /**
   * The icon of the link
   */
  icon: React.JSX.ElementType;
}

/**
 * An experience of work
 */
export interface Experience {
  /**
   * The length of work
   */
  period: `${string} - ${string}`;
  /**
   * The role played
   */
  position: string;
  /**
   * The place of work
   */
  company: string;
  /**
   * A brief of contribution
   */
  description: string;
}

/**
 * A project
 */
export interface Project {
  /**
   * The id of a project
  */
  id: string
  /**
   * The title of the project
  */
  title: string;
  /**
   * The url(link) of the project
  */
  url: string;
  /**
   * A brief summary of the project
  */
  description: string;
  /**
   * The tools used to build the project
  */
  tools: Array<string>;
}
