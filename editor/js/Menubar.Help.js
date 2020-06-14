/**
 * @author mrdoob / http://mrdoob.com/
 */

import { UIPanel, UIRow, UIDialog } from './libs/ui.js';


var MenubarHelp = function ( editor ) {

	var strings = editor.strings;

	var container = new UIPanel();
	container.setClass( 'menu' );

	var title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/help' ) );
	container.add( title );

	var options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Source code

	var option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/source_code' ) );
	option.onClick( function () {

		window.open( 'https://github.com/samhu1989/WeshLab/', '_blank' );

	} );
	options.add( option );

	// About

	var option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/about' ) );
	option.onClick( function () {
        var login = document.createElement("div");
        login.id = "login";
        login.style = "display:block";
        login.style.backgroundImage="url(images/icon.png)";
        login.style.backgroundRepeat="no-repeat";
        login.style.backgroundSize="100% 100%";
        login.style.width = 320;
        login.style.height = 210;
        var dialog = new UIDialog();
        dialog.setTitle("About");
        dialog.setBody(login);
        dialog.addMask();
	} );
	options.add( option );

	return container;

};

export { MenubarHelp };
