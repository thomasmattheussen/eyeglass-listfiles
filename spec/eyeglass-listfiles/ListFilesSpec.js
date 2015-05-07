describe("Listfiles", function() {
    var Sass = require('node-sass'),
        assign = require('object-assign');
        renderOptions = require('eyeglass')({
            outputStyle: 'compact'
        }).sassOptions();

    function compile(data, opts) {
        return Sass.renderSync(assign({}, opts, {
            data: data
        })).css.toString();
    }

    it("lists all files in a directory", function() {
        var code = '@each $filename, $file in listFiles("./spec/support/testDir") { .#{$filename} { foo: url($file); }}'
        expect(compile(code, renderOptions)).toEqual('.afile { foo: url(afile.jpg); }\n\n.anotherfile { foo: url(anotherfile.json); }\n\n.ohyesonemorefile { foo: url(ohyesonemorefile.txt); }\n');
    });
});



