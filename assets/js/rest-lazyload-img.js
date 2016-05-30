function RESTimgLoader( root ) {
    var self = this;
    this.getSrc = function( id, size, skip  ){

        var url = root + '/wp/v2/media/' + id;
        var cacheKey = 'RESTimgCache-' + url;
        if ( false == skip ) {
            var local = localStorage.getItem( cacheKey );
        } else {
            local = false;
        }

        if ( 'string' != typeof local || "null" == local || '[object Object]' == local ) {
            return $.get( url ).then( function ( r ) {

                localStorage.setItem( cacheKey, JSON.stringify(r) );
                return response(r, size );
            } );
        }else {
            local = JSON.parse( local );
            if ( 'object' == typeof  local ){
                return response(local, size );

            }else{
                this.getSrc( id, size, true );
            }
        }


        function response( r, size ) {
            var src, alt;
            if ( undefined != r.size ){
                src = r.size;
            }

            src = r.source_url;
            alt = r.alt_text;
            return {
                alt: alt,
                src: src
            }
        }

    };

    this.img = function ( $img ) {
        var id = $img.attr( 'data-media-id' );
        var size = $img.attr( 'data-media-size' );
        if ( !size ) {
            size = 'full';
        }

        if ( id ) {
            $.when( self.getSrc( id, size, false ) ).then( function ( r ) {
                if ( r.src ) {
                    $img.attr( 'src', r.src );
                }
                if ( r.alt ){
                    $img.attr( 'alt', r.alt );
                }
            } );
        }
    }

};

$.fn.RESTimgLoader = function( options ) {
    var settings = $.extend({
        root: false
    }, options );

    var loader = new RESTimgLoader( settings.root );

    return this.each(function( i, img  ) {
        loader.img( $( img ) );
    });


};
