package com.github.ttwd80.blockuidownload;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Random;

@SpringBootApplication
@Controller
public class DemoApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/")
	public ModelAndView index() {
		return new ModelAndView("index");
	}

	@PostMapping("/do-post")
	public void doPost(@RequestParam("key") String key, HttpServletResponse response) throws InterruptedException, IOException {
		long time = 3_000;
		time += new Random().nextLong(3_000);
		Thread.sleep(time);
		response.setContentType("application/x-download");
		response.setHeader("Content-disposition", "attachment; filename=xoxo.txt");
		response.setHeader("Set-Cookie", "status-index-html-done=done");
		response.getWriter().println("xoxo");
	}

}
