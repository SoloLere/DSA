class Solution:
    def invalidTransactions(self, transactions: List[str]) -> List[str]:
        hashmap = {}
        res = []
        
        for i in range(len(transactions)):
            name, time, amount, city = transactions[i].split(',')
            time = int(time)
            amount = int(amount)
            if time not in hashmap:
                hashmap[time] = {name: set([city])}
            else:
                if name not in hashmap[time]:
                    hashmap[time][name] = set([city])
                else:
                    hashmap[time][name].add(city)
                    
        for transaction in transactions:
            name, time, amount, city = transaction.split(',')
            time = int(time)
            amount = int(amount)
            
            if amount > 1000:
                res.append(transaction)
                
            else:
                for time in range(time - 60, time + 61):
                    if time not in hashmap:
                        continue
                    if name not in hashmap[time]:
                        continue
                    if len(hashmap[time][name]) > 1 or next(iter(hashmap[time][name])) != city:
                        res.append(transaction)
                        break
        
        return res
                        
            
            
            
        
        