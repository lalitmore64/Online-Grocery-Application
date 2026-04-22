package com.lalit.grocery.service;

import com.lalit.grocery.io.UserRequest;
import com.lalit.grocery.io.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
