package com.example.demo;
import java.util.List;

import org.springframework.data.repository.Repository;

public interface MentorRepository extends Repository<Mentor, Long>
   {
  	 void delete(Mentor mentor);
		 
		 List<Mentor> findAll();
		 
		 Mentor findOne(Long mentorId);
		 
		 Mentor save(Mentor mentor);
		 
		 List<Mentor> findByEmailAndPassword(String email,String password);
		 List<Mentor> findByActive(Boolean active);
			List<Mentor> findByMentorId(Long id);
			List<Mentor> findByUserName(String userName);
}