import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectItem } from '../components/ui/select';

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Buy Virtual Visa Cards Instantly</h1>
      <Card className="p-6 shadow-xl rounded-2xl bg-white">
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="cardType">Card Type</Label>
              <Select id="cardType">
                <SelectItem value="virtual">Virtual</SelectItem>
                <SelectItem value="physical">Physical</SelectItem>
              </Select>
            </div>
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Select id="currency">
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
              </Select>
            </div>
            <div>
              <Label htmlFor="amount">Card Amount</Label>
              <Input type="number" id="amount" placeholder="$10 - $1000" />
            </div>
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" placeholder="you@example.com" />
            </div>
            <Button className="w-full" type="submit">Proceed to Payment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
