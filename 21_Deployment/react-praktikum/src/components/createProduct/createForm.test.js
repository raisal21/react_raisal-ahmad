import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateForm from './CreateForm'; // Adjust the import path as needed

describe('CreateProduct Form', () => {
  beforeEach(() => {
    render(<CreateForm />);
  });

  test('Product Name input can receive text and display it', () => {
    const nameInput = screen.getByLabelText(/Product Name/i);
    fireEvent.change(nameInput, { target: { value: 'Test Product' } });
    expect(nameInput.value).toBe('Test Product');
  });

  test('Selected form options are saved and displayed correctly', () => {
    const categorySelect = screen.getByLabelText(/Category/i);
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } });
    expect(categorySelect.value).toBe('Electronics');

    const freshnessRadio = screen.getByLabelText(/Brand New/i);
    fireEvent.click(freshnessRadio);
    expect(freshnessRadio.checked).toBe(true);
  });

  test('Form input validation for Product Name - not empty and no invalid characters', () => {
    const nameInput = screen.getByLabelText(/Product Name/i);

    // Test for empty input
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.blur(nameInput);
    expect(screen.getByText(/Product name is required/i)).toBeInTheDocument();

    // Test for invalid characters
    fireEvent.change(nameInput, { target: { value: 'Test@Product' } });
    fireEvent.blur(nameInput);
    expect(screen.getByText(/Product name contains invalid characters/i)).toBeInTheDocument();

    // Test for valid input
    fireEvent.change(nameInput, { target: { value: 'Valid Product' } });
    expect(screen.queryByText(/Product name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Product name contains invalid characters/i)).not.toBeInTheDocument();
  });

  test('Form input validation for Product Name - not exceeding 25 characters', () => {
    const nameInput = screen.getByLabelText(/Product Name/i);

    // Test for exceeding 25 characters
    fireEvent.change(nameInput, { target: { value: 'This is a very long product name exceeding 25 characters' } });
    fireEvent.blur(nameInput);
    expect(screen.getByText(/Product name must not exceed 25 characters/i)).toBeInTheDocument();

    // Test for valid length
    fireEvent.change(nameInput, { target: { value: 'Valid Product Name' } });
    expect(screen.queryByText(/Product name must not exceed 25 characters/i)).not.toBeInTheDocument();
  });

  test('Form input validation - all fields must not be empty', () => {
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Product name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Category is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Image is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Freshness is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Price is required/i)).toBeInTheDocument();
  });

  test('Form displays error message when saving data to state fails', () => {
    const nameInput = screen.getByLabelText(/Product Name/i);
    const categorySelect = screen.getByLabelText(/Category/i);
    const imageInput = screen.getByLabelText(/Image/i);
    const freshnessRadio = screen.getByLabelText(/Brand New/i);
    const priceInput = screen.getByLabelText(/Price/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'Valid Product' } });
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } });
    fireEvent.change(imageInput, { target: { value: null } });
    fireEvent.click(freshnessRadio);
    fireEvent.change(priceInput, { target: { value: '100' } });

    // Simulate validation error by not filling the image field
    fireEvent.click(submitButton);

    expect(screen.getByText(/Please correct the errors in the form/i)).toBeInTheDocument();
  });
});
