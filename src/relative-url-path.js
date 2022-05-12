/**
* @author Brent Williams <brent.williams@ddincmail.org>.
* @class new instance of RelativeUrl
*
* @description Creates a relative url (e.g: https://www.yoursite.com/path/path/file)
*/

//TODO:

class RelativeUrl
{
	/**
	* @constructor
	* No params everything is gotten from using windows location object.
	*/
	
    constructor()
	{
		this.origin = location.origin;
		this.pathname = location.pathname;
		this.relativePath = '';

		this.CreateRelativePath(this.pathname);
	}

	/**
	* @method
	*
	* @param {str} path A string with the location.pathname.
	* @description Creates the relative url minus the index.html file.
	*/
	
	CreateRelativePath(path)
	{
		let pathArray = path.split('/');
		let newPath = "";

		pathArray.pop(pathArray.length-1);
		pathArray.forEach(path => 
			{
				newPath += `${path}/`;
			})
		this.relativePath = `${this.origin}${this.relativePath}`;
	}
}