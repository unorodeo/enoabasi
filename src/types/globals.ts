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
