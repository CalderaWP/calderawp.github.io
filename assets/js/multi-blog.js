function MultiBlog() {
    var self = this;

    var all;

    var currentTime = 0;

    this.init = function( render ) {

        $.when(
            self.getCWP(),
            self.getIngot(),
            self.getJoshPress()
        ).then(function(  dIngot, dJosh, dCWP ) {
            all = self.merge( dJosh, dIngot );
            all = self.merge( dCWP, dJosh );
            all = self.sort( all, 'date' );
            $( 'body' ).triggerHandler( 'multiBlog.init' );

        });

    };

    this.render = function ( el, tmplEl ) {
        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g
        };
        var  html = '';
        var templateHTML = document.getElementById( tmplEl ).innerHTML;

        var template = _.template( templateHTML );

        var item, templatedItem;
        $.each( all, function ( i, post ) {
            templatedItem = template( post );
            html += templatedItem;
        });

        document.getElementById( el ).innerHTML = html;
        $( 'body' ).triggerHandler( 'multiBlog.rendered' );

    };

    this.api = function( url, prefix ) {
        var key = 'clCache' + url.replace(/^https?\:\/\//i, "");
        var timeKey = 'time' + key;
        var local;

        if ( ! self.isStale( timeKey ) ){
            local = localStorage.getItem( key );
        }

        if ( ! _.isString( local ) || "null" == local ) {
            return $.get( url ).then( function ( r ) {
                r = self.addPrefixes( r, prefix );
                localStorage.setItem( timeKey, self.getCurrentTime() );
                localStorage.setItem( key, JSON.stringify( r ) );
                return r;
            } );
        }else {
            return JSON.parse( local );
        }

    };

    this.isStale = function ( timeKey ) {
        var setTime = localStorage.getItem( timeKey );
        if ( ! _.isNull( setTime )   ){
            if ( setTime + 432000 > self.getCurrentTime() ) {
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }

    };

    this.getCurrentTime = function () {
        if ( 0 == currentTime ) {
            currentTime = Math.round(new Date().getTime()/1000);
        }
        return currentTime;
    };

    this.getJoshPress = function ( ) {
        return self.api( 'http://joshpress.net/wp-json/wp/v2/posts', 'jp' );
    };

    this.getCWP = function ( ) {
        return self.api( 'https://calderawp.com/wp-json/wp/v2/posts', 'cwp' );
    };


    this.getIngot = function () {
        return self.api( 'https://ingothq.com/wp-json/wp/v2/posts', 'ing' );
    };


    this.merge = function(obj1, obj2) {
        var merged;
        a1 = _.toArray(obj1);
        a2 = _.toArray(obj2);
        merged = a1.concat(a2);
        return merged;
    };

    this.sort = function( list, sort ) {
        var sorted = _.sortBy( list, sort );
        return sorted.reverse();
    };

    this.addPrefixes = function ( items, prefix ) {
        for ( var i = 0; i < items.length; i++ ) {
            items[ i ][ 'prefix' ]  = prefix;
        }

        return items;
    };



}


