package com.classworks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.classworks.service.SchoolSoftwareService;

@RestController
@RequestMapping("/api/software")
public class SchoolSoftwareController {

    @Autowired
    private SchoolSoftwareService schoolSoftwareService;

    @GetMapping
    public ResponseEntity<?> getAllSoftware() {
        return ResponseEntity.ok(schoolSoftwareService.getAllSoftware());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSoftwareById(@PathVariable Long id) {
        return ResponseEntity.ok(schoolSoftwareService.getSoftwareById(id));
    }

    @PostMapping
    public ResponseEntity<?> createSoftware(@RequestBody SoftwareDto softwareDto) {
        return ResponseEntity.status(201).body(schoolSoftwareService.createSoftware(softwareDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateSoftware(@PathVariable Long id, @RequestBody SoftwareDto softwareDto) {
        return ResponseEntity.ok(schoolSoftwareService.updateSoftware(id, softwareDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSoftware(@PathVariable Long id) {
        schoolSoftwareService.deleteSoftware(id);
        return ResponseEntity.noContent().build();
    }
}