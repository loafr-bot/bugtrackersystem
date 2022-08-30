package net.myproject.bugTracker.repo;

import net.myproject.bugTracker.domain.account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepo extends JpaRepository<account, Long> {

    Optional<account> findByUsername(String username);
}
