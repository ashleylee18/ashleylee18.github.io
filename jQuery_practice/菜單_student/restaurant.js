$(document).ready(function() {
            $("#vegOn").click(function() {
                $("li.fish").parent().remove();
                $(.meat).after("<li class="
                    tofu ">豆腐</li>");
                $(.meat).replaceWith("<li class="
                    portobello ">龍葵菇</li>");
                $(".portobello").parent().addClass(".veg_leaf");

            });
        };

        $("#restoreMe").click(function() {
            $(".portobello").parent().parent().removeClass("veg_leaf");
            $(".portobello").replaceWith("<li class")
        })
