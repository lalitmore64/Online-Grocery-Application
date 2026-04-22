package com.lalit.grocery.service;

import com.lalit.grocery.io.CartRequest;
import com.lalit.grocery.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest request);
}
