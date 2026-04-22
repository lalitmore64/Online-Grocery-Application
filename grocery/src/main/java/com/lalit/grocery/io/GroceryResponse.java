package com.lalit.grocery.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GroceryResponse {
    private String id;
    private String name;
    private String description;
    private String imageUrl;
    private String price;
    private String category;
}
