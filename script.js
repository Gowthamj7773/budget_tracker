var description = document.getElementById("description")
var amount = document.getElementById("amount")
//money numbers
var top_money = document.getElementById("top_money")
var mid_money1 = document.getElementById("mid_money1")
var mid_money2 = document.getElementById("mid_money2")
//money balance
var main_balance = 0
var income = 0
var expense = 0

var right_list = document.getElementById("right_list")
var new_element = document.createElement("li")
function transaction()
{
    var previous_val
    //for appending
    var right_list = document.getElementById("right_list")
    var new_element = document.createElement("li")

    //last values
    previous_val = amount.value
    if(amount.value.length<=15 && description.value.length<=15){
    
        if(Number(amount.value) >= 0)
        {
        new_element.innerHTML = "<div class=\"right_list_data\" style=\"display:flex\">" +
                                    "<p style=\"padding:10px\">" + description.value + "</p>" +
                                    "<p style=\"padding:10px;margin-left:50px;\">" + previous_val + "</p>" +
                                    "<button class=\"right_delete_button\" onclick=\"del(event)\"></button>" +
                                    "</div>";
        //for appending
        right_list.append(new_element)
        main_balance+=Number(previous_val)
        income+=Number(previous_val)
        top_money.textContent = "₹ "+main_balance
        mid_money1.textContent = "₹ "+income
        }
        else if(Number(amount.value) < 0)
            {
            new_element.innerHTML = "<div class=\"right_list_data\" style=\"display:flex\">" +
                                        "<p style=\"padding:10px\">" + description.value + "</p>" +
                                        "<p style=\"padding:10px;margin-left:50px;\">" + previous_val + "</p>" +
                                        "<button class=\"right_delete_button\" onclick=\"del(event)\"></button>" +
                                        "</div>";
            right_list.append(new_element)
            main_balance+=Number(previous_val)
            expense+=Number(-1*previous_val)
            top_money.textContent = "₹ "+main_balance
            mid_money2.textContent = "₹ "+expense
            }
    }
    else{
        alert("Too Long. please reduce the size of the input")
    }
} 

function del(event)
{
    event.target.parentElement.remove()
}
