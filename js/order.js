//order.js
// nicolas roldos
// 2/20/2017

$(document).ready(function() {
    var tax = 0
    var totalBeforeTax = 0
    var totalWithTax = 0
    var subtotal = 0
    var itemName = ''
    var price = ''

    $('.card').on('click', function() {

        var targetId = $(event.target).attr('id')
        // console.log(targetId);
        switch (targetId) {
            case 'btn1':
                price = $('.item-one .price').text()
                itemName = $('.item-one .name').text()
                orderSummaryHTML(price, itemName)
                calculateTotals(price)

                break;
            case 'btn2':
                price = $('.item-two .price').text()
                itemName = $('.item-two .name').text()
                orderSummaryHTML(price, itemName)
                calculateTotals(price)
                break;
            case 'btn3':
                price = $('.item-three .price').text()
                itemName = $('.item-three .name').text()
                orderSummaryHTML(price, itemName)
                calculateTotals(price)
                break;
            case 'btn4':
                price = $('.item-four .price').text()
                itemName = $('.item-four .name').text()
                orderSummaryHTML(price, itemName)
                calculateTotals(price)
                break;
        }



    })

    // calculateTotals calculates a running total of the order
    function calculateTotals(price) {
        var priceNumber = Number(price.slice(1)).toFixed(2)

        totalBeforeTax = Number(priceNumber) + Number(totalBeforeTax)

        tax = Number(priceNumber * .08) + Number(tax)
        tax = Number(tax).toFixed(2)

        totalWithTax = Number(totalBeforeTax) + Number(tax) + Number(totalWithTax)
        totalWithTax = Number(totalWithTax).toFixed(2)

        $('.subtotal #subtotal-total').text(totalBeforeTax)
        $('.tax #tax-total').text(tax)
        $('.total #total-total').text(totalWithTax)
    }

    // orderSummaryHTML function adds prices tax and item-names to Order details html
    function orderSummaryHTML(price, itemName) {
        var tax = (Number(price.slice(1)) * .08).toFixed(2)
        var priceNumber = Number(price.slice(1)).toFixed(2)

        $('#my-order').append('<tr><td><strong>' + itemName + '</strong></td><td>' + price + '</td><td>' + tax + '</td><td><strong>' + '$' + (Number(tax) + Number(priceNumber)) + '</strong></td></tr>')
    }
})
