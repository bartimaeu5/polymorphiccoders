package com.polymorphiccoders;

import java.util.Arrays;
import java.util.List;

public class Service {
	
	public void saveCustomerContact(String customerContact) {
		System.out.println(customerContact);
	}
	
	public List<String> getClients() {
		return Arrays.asList("03", "04", "05", "06", "07", "08", "09", "10");
	}
	
}
