import * as JSZip from "jszip";
var HandleZip = /** @class */ (function () {
    function HandleZip(file) {
        if (file instanceof File) {
            this.uploadFile = file;
        }
        else {
            this.workBook = file;
        }
    }
    HandleZip.prototype.unzipFile = function (successFunc, errorFunc) {
        var new_zip = new JSZip();
        new_zip.loadAsync(this.uploadFile) // 1) read the Blob
            .then(function (zip) {
            var fileList = {}, lastIndex = Object.keys(zip.files).length, index = 0;
            zip.forEach(function (relativePath, zipEntry) {
                zipEntry.async("string").then(function (data) {
                    fileList[zipEntry.name] = data;
                    console.log(lastIndex, index);
                    if (lastIndex == index + 1) {
                        successFunc(fileList);
                    }
                    index++;
                });
            });
        }, function (e) {
            errorFunc(e);
        });
    };
    HandleZip.prototype.zipFile = function (workBook) {
    };
    return HandleZip;
}());
export { HandleZip };
