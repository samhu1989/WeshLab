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
        login.style="display:block";
        login.innerHTML = "<form action=\"#\" method=\"post\" onSubmit=\"return false;\">\n<table width=\"400\" height=\"95\"><tr><td width=\"78\">链接文字</td><td width=\"168\"><input name=\"link.name\" type=\"text\"/></td><td width=\"138\" id=\"linktext\"></td></tr><tr><td>链接地址</td><td><input name=\"link.url\" type=\"text\"/></td><td id=\"linkurl\"></td></tr><tr><td></td><td><button type=\"submit\" style=\"float:right;\">添加</button></td><td id=\"savelink\"></td></tr></table></form>";
        var dialog = new UIDialog();
        dialog.setTitle("About");
        dialog.setBody(login);
	} );
	options.add( option );

	return container;

};

export { MenubarHelp };
