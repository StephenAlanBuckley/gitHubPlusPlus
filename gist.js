function Gist() {
        this.apply = function() {
            $('.root-pane').css('margin-left', '-20%');
            $('.column.files').css('float', '') //We don't need the float now that the side pane's outta the way.prop
                              .css('width', '100%');
        }
}
