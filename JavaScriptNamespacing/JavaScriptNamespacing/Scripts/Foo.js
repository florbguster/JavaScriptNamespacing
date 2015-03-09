/* FOO Namespace */
;FOO = {
    name: 'FOO',
    myFunction: function () {
        $('#div1').html('This is from namespace FOO');
    }
}


/* BAR Namespace */
;BAR = {
    name: 'BAR',
    myFunction: function () {
        $('#div2').html('This is from namespace BAR');
    }
}


// Extending functionality
BAR.myFunctionExtend = function () {
    $('#div3').html('This was an extension of namespace BAR');
};

// JQUERY Namespace
$(function () {
    // Note that the functions have the same names, but different namespaces
    BAR.myFunction();
    FOO.myFunction();
    BAR.myFunctionExtend();
});