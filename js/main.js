define([
           'dojo/_base/declare',
           'dojo/_base/lang',
           'dojo/Deferred',
           'dojo/data/ObjectStore',
           'dojo/store/Memory',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           lang,
           Deferred,
           ObjectStore,
           MemoryStore,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    aliases: {
        "ctgA": "ctgAyyyy",
        "ctgB": "ctgBoooo"
    },

    constructor: function( args ) {
        console.log("plugin AliasRefSeqs loaded");
        this.browser.afterMilestone(
            'completely initialized',
            this.aliasRefSeqSelectBoxOptions,
            this
        )
    },

    aliasRefSeqSelectBoxOptions: function() {
        var thisB = this;
        var selectBox = this.browser.refSeqSelectBox
        var newOptions = selectBox.options.map( function(option) {
            return {
                id: option.value,
                label: thisB.aliases[option.value] || option.value,
                selected: option.selected
            }
        })
        this.browser.refSeqSelectBox.setStore(
            new ObjectStore({
                    objectStore: new MemoryStore({
                    data: newOptions
                })
            })
        )
    }
});
});

