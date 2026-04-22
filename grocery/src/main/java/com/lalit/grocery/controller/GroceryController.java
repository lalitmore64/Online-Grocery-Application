package com.lalit.grocery.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lalit.grocery.io.GroceryRequest;
import com.lalit.grocery.io.GroceryResponse;
import com.lalit.grocery.service.GroceryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/grocery")
@AllArgsConstructor
@CrossOrigin("*")
public class GroceryController {

    private final GroceryService groceryService;

    @PostMapping
    public GroceryResponse addGrocery(@RequestPart("grocery") String groceryString,
                                      @RequestPart("file") MultipartFile file) {
        ObjectMapper objectMapper = new ObjectMapper();
        GroceryRequest request = null;
        try {
            request = objectMapper.readValue(groceryString, GroceryRequest.class);
        }catch (JsonProcessingException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON Format");
        }
        GroceryResponse response = groceryService.addGrocery(request, file);
        return response;
    }

    @GetMapping
    public List<GroceryResponse> readGrocery() {
        return groceryService.readGrocery();
    }

    @GetMapping("/{id}")
    public GroceryResponse readGrocery(@PathVariable String id) {
        return groceryService.readGrocery(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGrocery(@PathVariable String id) {
        groceryService.deleteGrocery(id);
    }
}
