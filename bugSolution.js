This workaround converts empty strings to a special placeholder before setting the parameter and converts it back after retrieving it.
```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const testParam = searchParams.get('test');
  const processedTestParam = testParam === '_EMPTY_' ? '' : testParam; // Convert back from placeholder

  const handleTestChange = (value) => {
    const paramValue = value === '' ? '_EMPTY_' : value; // Convert to placeholder if empty
    setSearchParams({ test: paramValue });
  };

  return (
    <div>
      <p>Test parameter: {processedTestParam}</p>
      <input type="text" value={processedTestParam} onChange={(e) => handleTestChange(e.target.value)} />
    </div>
  );
}

export default MyComponent;
```