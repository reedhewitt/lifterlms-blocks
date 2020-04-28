<?php
/**
 * Instructors block.
 *
 * Render hook: llms_instructors-block_render
 *
 * @package LifterLMS_Blocks/Blocks
 *
 * @since 1.0.0
 * @version [version]
 */

defined( 'ABSPATH' ) || exit;

/**
 * Course syllabus block class.
 *
 * @since 1.0.0
 * @since 1.1.0 Unknown.
 * @since [version] Fixed a spelling error.
 */
class LLMS_Blocks_Instructors_Block extends LLMS_Blocks_Abstract_Block {

	/**
	 * Block ID.
	 *
	 * @var string
	 */
	protected $id = 'instructors';

	/**
	 * Is block dynamic (rendered in PHP).
	 *
	 * @var bool
	 */
	protected $is_dynamic = true;

	/**
	 * Add actions attached to the render function action.
	 *
	 * @since 1.0.0
	 * @since 1.1.0 Unknown.
	 *
	 * @param array  $attributes Optional. Block attributes. Default empty array.
	 * @param string $content    Optional. Block content. Default empty string.
	 * @return void
	 */
	public function add_hooks( $attributes = array(), $content = '' ) {

		add_action( $this->get_render_hook(), 'lifterlms_template_course_author', 10 );

	}

	/**
	 * Retrieve custom block attributes.
	 *
	 * Necessary to override when creating ServerSideRender blocks.
	 *
	 * @since 1.0.0
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array_merge(
			parent::get_attributes(),
			array(
				'post_id' => array(
					'type'    => 'int',
					'default' => 0,
				),
			)
		);
	}

	/**
	 * Output a message when no HTML was rendered
	 *
	 * @since 1.0.0
	 * @since [version] Fixed spelling error.
	 *
	 * @return string
	 */
	public function get_empty_render_message() {
		return __( 'No visible instructors were found.', 'lifterlms' );
	}

}

return new LLMS_Blocks_Instructors_Block();
