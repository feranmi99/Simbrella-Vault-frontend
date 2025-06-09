// components/services/AirtimeForm.tsx
import { useState } from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Select from '../shared/Select';

const networks = [
    { value: 'mtn', label: 'MTN' },
    { value: 'airtel', label: 'Airtel' },
    { value: 'glo', label: 'Glo' },
    { value: '9mobile', label: '9mobile' },
];

const amounts = [
    { value: '100', label: '₦100' },
    { value: '200', label: '₦200' },
    { value: '500', label: '₦500' },
    { value: '1000', label: '₦1000' },
];

export default function AirtimeForm({ onCancel }: { onCancel: () => void }) {
    const [phone, setPhone] = useState('');
    const [network, setNetwork] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Handle airtime purchase
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <Select
                label="Network"
                options={networks}
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                required
            />
            <Select
                label="Amount"
                options={amounts}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" loading={loading}>
                    Buy Airtime
                </Button>
            </div>
        </form>
    );
}