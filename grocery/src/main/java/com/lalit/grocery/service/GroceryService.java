package com.lalit.grocery.service;

import com.lalit.grocery.io.GroceryRequest;
import com.lalit.grocery.io.GroceryResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface GroceryService {
    String uploadFile(MultipartFile file);

    GroceryResponse addGrocery(GroceryRequest request, MultipartFile file);

    List<GroceryResponse> readGrocery();

    GroceryResponse readGrocery(String id);

    boolean deleteFile(String filename);

    void deleteGrocery(String id);
}
