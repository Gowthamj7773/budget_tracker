var description = document.getElementById("description")
var amount = document.getElementById("amount")
//money numbers
var top_money = document.getElementById("top_money")
var mid_money1 = document.getElementById("mid_money1")
var mid_money2 = document.getElementById("mid_money2")
//money balance
let main_balance = 0
let income = 0
let expense = 0

var right_list = document.getElementById("right_list")
var new_element = document.createElement("li")
var previous_val
function transaction()
{
    
    //for appending
    var right_list = document.getElementById("right_list")
    var new_element = document.createElement("li")

    //last values
    previous_val = amount.value
    if(amount.value && description.value)
        {
    if(amount.value.length<=15 && description.value.length<=15){
    
        if(Number(amount.value) >= 0)
        {
        new_element.innerHTML = "<div class=\"right_list_data\" id=\"right_list_data_income\">" +
                                    "<p style=\"padding:10px\">" + description.value + "</p>" +
                                    "<p style=\"padding:10px;margin-left:50px;\">"+"₹ "+ previous_val + "</p>" +
                                    "<button class=\"right_delete_button\" onclick=\"del(event)\"></button>" +
                                    "</div>";

        right_list.append(new_element)
        main_balance+=Number(previous_val)
        income+=Number(previous_val)
        top_money.textContent = "₹ "+main_balance
        mid_money1.textContent = "₹ "+income

        description.value=""
        amount.value=""
        }
        else if(Number(amount.value) < 0)
            {
            new_element.innerHTML = "<div class=\"right_list_data\" id=\"right_list_data_expense\">" +
                                        "<p style=\"padding:10px\">" + description.value + "</p>" +
                                        "<p style=\"padding:10px;margin-left:50px;\">"+"₹ "+ previous_val + "</p>" +
                                        "<button class=\"right_delete_button\" onclick=\"del(event)\"></button>" +
                                        "</div>";
            right_list.append(new_element)
            main_balance+=Number(previous_val)
            expense+=Number(-1*previous_val)
            top_money.textContent = "₹ "+main_balance
            mid_money2.textContent = "₹ "+expense

            description.value=""
            amount.value=""
            }
    }
    else{
        alert("Too Long. please reduce the size of the input")
        }
    }
    else{
        alert("Please fill all the inputs")
    }
} 

function del(event)
{
event.target.parentElement.remove()
}
