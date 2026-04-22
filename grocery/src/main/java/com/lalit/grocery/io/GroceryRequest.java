package com.lalit.grocery.io;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroceryRequest {
    private String name;
    private String description;
    private String price;
    private String category;
}
