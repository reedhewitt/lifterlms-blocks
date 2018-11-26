/**
 * BLOCK: llms/course-continue-button
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// WP Deps.
const { Button } = wp.components
const { Fragment } = wp.element
const { __ } = wp.i18n;

/**
 * Block Name
 * @type {String}
 */
export const name = 'llms/course-continue-button';

/**
 * Register: Course Continue Button Block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully, registered; otherwise `undefined`.
 * @since   [version]
 * @version [version]
 */
export const settings = {
	title: __( 'Course Continue Button', 'lifterlms' ),
	icon: {
		foreground: '#2295ff',
		src: 'migrate'
	},
	category: 'common', // common, formatting, layout widgets, embed. see https://wordpress.org/gutenberg/handbook/block-api/#category.
	keywords: [
		__( 'LifterLMS', 'lifterlms' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 * @param   {Object} props Block properties.
	 * @return  {Function}
	 * @since   [version]
	 * @version [version]
	 */
	edit: function( props ) {
		return (
			<div className={ props.className }>
				<p style={ { textAlign: 'center' } }>
					<Button isPrimary isLarge>{ __( 'Continue', 'lifterlms' ) }</Button>
				</p>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 * @param   {Object} props Block properties.
	 * @return  {Function}
	 * @since   [version]
	 * @version [version]
	 */
	save: function( props ) {
		return (
			<div className={ props.className } style={ { textAlign: 'center' } }>
				[lifterlms_course_continue_button]
			</div>
		);
	},
}
