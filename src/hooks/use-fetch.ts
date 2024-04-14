import { options } from '@/utils/helper/api.helper';
import { useEffect, useState } from 'react';

export function useFetch<TData>(url: string) {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let response = await fetch(url, options);
      response = await response.json();

      if (response) setData(response as TData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, fetchData };
}
