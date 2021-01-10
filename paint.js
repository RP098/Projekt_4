/* encoding="UTF-8" */
<script type="text/javascript">
        var images = [
          '/paint_js/test/uploads/wPaint.png',
        ];

        function saveImg(image) {
          var _this = this;

          $.ajax({
            type: 'POST',
            url: '/paint_js/test/upload.php',
            data: {image: image},
            success: function (resp) {

      
              _this._displayStatus('Image saved successfully');

             
              resp = $.parseJSON(resp);

            )
              images.push(resp.img);

           
              $('#wPaint-img').attr('src', image);
            }
          });
        }

        function loadImgBg () {

          this._showFileModal('bg', images);
        }

        function loadImgFg () {

          
          this._showFileModal('fg', images);
        }

      
        $('#wPaint').wPaint({
          menuOffsetLeft: -35,
          menuOffsetTop: -50,
          saveImg: saveImg,
          loadImgBg: loadImgBg,
          loadImgFg: loadImgFg
        });
      </script>
