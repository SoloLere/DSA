class Solution:
    def invalidTransactions(self, transactions: List[str]) -> List[str]:
        names, times, amounts, citys, res = [], [], [], [], [False for i in range(len(transactions))];
        
        for i in range(len(transactions)):
            name, time, amount, city = transactions[i].split(',')
            names.append(name);
            times.append(int(time));
            amounts.append(int(amount));
            citys.append(city);
            
        
        for i in range(len(transactions)):
            if amounts[i] > 1000:
                res[i] = True
                                
            for j in range(i + 1, len(transactions)):
                if names[i] == names[j] and citys[i] != citys[j] and abs(times[i] - times[j]) <= 60:
                    res[i] = True
                    res[j] = True
                    
               
        ans = []
        for i in range(len(res)):
            if res[i] == True:
                ans.append(transactions[i])
        return ans