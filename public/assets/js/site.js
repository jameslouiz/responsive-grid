/*! click-xpose - v0.1.0 - 2013-09-03 */var hello = 'asdfd';
(function($){

    /*
     object literals make for better code organization
     - http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/
     - http://christianheilmann.com/2006/02/16/show-love-to-the-object-literal/
     - http://www.dustindiaz.com/json-for-the-masses/
     */
    var site = {

        init: function()
        {
            var hello = 'hello';
            console.log(hello);
        }

    }

    //document ready
    $(function(){


        /*
         only logic that requires the dom to be ready needs to go in here, you should not need to write the words
         $(document).ready ever again in this file...
         */

        site.init();





    });
}(jQuery));
