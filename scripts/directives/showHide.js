"use strict";

angular.module('upl-site').
    directive("showHide", function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                // Set up click handler for show hide
                element.on("click", function(e) {
                    if (e.target.tagName !== "H2") {
                        // Only want to show hide when clicking on the title of the section
                        return;
                    }
                    
                    var para = angular.element(element[0].querySelector(".para-hidden"));
                    var expand = angular.element(element[0].querySelector(".para-expand"));
                    if (para.css("display") === "none") {
                        para.css("display", "block");
                        expand.css("display", "none");
                    } else {
                        para.css("display", "none");
                        expand.css("display", "inline");
                    }
                });                
            }
        }
    })