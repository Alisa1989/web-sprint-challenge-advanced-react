import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("CheckoutForm renders without crashing", () => {
    render(<CheckoutForm />);
});

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    expect(getByText("Checkout Form")).not.toBeNull();
});

test("form shows success message on submit with form details", () => {
     const { getByRole, getByText } = render(<CheckoutForm />)
//   const name = container.querySelector('input[name="firstName"]')

//     fireEvent.change(name, {target: {value: "Fred" }});
//     expect(name.value).toEqual("Fred");
    fireEvent.click(getByRole('button', {name: /checkout/i}));
    expect(getByText("Your new green friends will be shipped to:")).not.toBeNull();

});
