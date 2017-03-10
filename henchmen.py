def answer( total_lamb ):
	if (total_lamb) >= 1:
		payList = [1]
		payListMin = [1]
		total_lamb = total_lamb - 1
	
	can_pay = True

	while ((total_lamb > 0) and (can_pay == True)):
		last_henchman = len(payList) - 1
		max_lambs = 0
		min_lambs = 0
		for i in range(1, total_lamb):
			if ((i <= payList[last_henchman] * 2) ):
				if ( len(payList) > 0 ):
					if (i >= (payList[last_henchman] + payList[last_henchman - 1])):
						max_lambs = i
						if (min_lambs == 0):
							min_lambs = i
				else:
					max_lambs = i
					if (min_lambs == 0):
						min_lambs = i
		if (max_lambs == 0):
			can_pay = False
		else:
			total_lamb = total_lamb - max_lambs 
			payList.append(max_lambs)
			payListMin.append(min_lambs)

	print "Max distriution: %s" % payList
	print "Min distribution: %s" % payListMin
	print "%s left over." % total_lamb
answer(40)
	
