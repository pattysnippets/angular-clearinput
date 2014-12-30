/**
 * Created by Joyce Cam on 30/12/2014.
 *
 * Simple and easy-to-implement angular read more directive.
 *
 */

var readMore = angular.module('clearInput', []);

readMore.directive('clearInput', function () {
		//<span class="ls-btn-clear lsicon-cross" title="Click to clear text" ></span>
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, elem, attr, ngModel) {

				var icon = $('<span class="btn-clear fa fa-times" title="Click to clear text"></span>');
				icon.insertBefore(elem);

				if (elem.next().hasClass("input-group-addon") || elem.parent().find('.input-group-addon').length > 0) {
					icon.css('right', '50px');
				}

				elem.on("focus", function () {
					$.trim(elem.val().length) > 0 && icon.fadeIn('fast');
				});
				elem.on("keyup", function () {
					$.trim(elem.val().length) > 0 ? icon.fadeIn("fast") : icon.fadeOut("fast");
				});
				elem.on("blur", function () {
					icon.fadeOut("fast");
				});
				icon.on("click", function () {
					ngModel.$setViewValue("");
					ngModel.$render();
					elem.focus();
				});

			}
		}

	});
