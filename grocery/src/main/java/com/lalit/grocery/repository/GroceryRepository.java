package com.lalit.grocery.repository;

import com.lalit.grocery.entity.GroceryEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryRepository extends MongoRepository<GroceryEntity, String> {
}
