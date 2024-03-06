import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} className="form" validateOnChange>
      <div className="form__fieldControl">
        <Input
          id="email"
          name="email"
          type="email"
          label="Input type: email"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid email address to test. For example:
          <br />
          <b>test@example.com</b> is a valid email
          <br />
          <b>testexample.com</b> is not a valid email
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="password"
          name="password"
          type="password"
          label="Input type: password"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid password to test. A valid password contains of
          at least 8 characters of which one lower one uppercase letter, a
          number and a special character. For example:
          <br />
          <b>Passw0rd!</b> is a valid password
          <br />
          <b>123456789</b> is not a valid password
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="search"
          name="search"
          type="search"
          label="Input type: search"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Usually used for search bars. It allows only numbers, letters and
          spaces. For example:
          <br />
          <b>Spaces and Digits 987</b> is a valid search query
          <br />
          <b>!@#$%^&*</b> is not a valid search query
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="url"
          name="url"
          type="url"
          label="Input type: url"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid url with protocol to test. For example:
          <br />
          <b>https://www.example.com</b> is a valid url
          <br />
          <b>htp://www.example.com</b> is not a valid url
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="tel"
          name="tel"
          type="tel"
          label="Input type: tel"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid phone numnber to test. A valid phone number
          should start with +following the country prefix of max 4 digits, a
          space and the phone number of max 10 characters. For example:
          <br />
          <b>+1 1234567890</b> is a valid phone number
          <br />
          <b>1234567890</b> is not a valid phone number
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="alphanumeric"
          name="alphanumeric"
          type="alphanumeric"
          label="Input type: alphanumeric"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Used for restricting a input to contain only letters or numbers. For
          example:
          <br />
          <b>ABC 123</b> is a valid alphanumeric value
          <br />
          <b>ABC !@</b> is not a valid alphanumeric value
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="alphabetic"
          name="alphabetic"
          type="alphabetic"
          label="Input type: alphabetic"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Used for restricting a input to contain only letters. For example:
          <br />
          <b>ABC</b> is a valid alphabetic value
          <br />
          <b>ABC123</b> is not a valid alphabetic value
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="numeric"
          name="numeric"
          type="numeric"
          label="Input type: numeric"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Used for restricting a input to contain only numbers. For example:
          <br />
          <b>12345</b> is a valid numeric value
          <br />
          <b>ABCDE</b> is not a valid numeric value
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="username"
          name="username"
          type="username"
          label="Input type: username"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid username to test. A valid user name usually
          contains of alphanumeric characters a @ _ or - but not spaces. For
          example:
          <br />
          <b>my_user_name</b> is a valid username
          <br />
          <b>my username!</b> is not a valid username
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="credit-card-number"
          name="credit-card-number"
          type="credit-card-number"
          label="Input type: credit-card-number"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid credit card number to test. A valid credit card
          number contains only 16 numeric characters. This is the most basic
          example of CCN that validates only number of numeric characters
          without hyphen or space. For example:
          <br />
          <b>1234567890123456</b> is a valid credit card number
          <br />
          <b>1232 232</b> is not a valid credit card number
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="credit-card-number-hyphen"
          name="credit-card-number-hyphen"
          type="credit-card-number-hyphen"
          label="Input type: credit-card-number-hyphen"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid credit card number to test. A valid credit card
          number contains only 16 numeric characters delimited by hyphen. For
          example:
          <br />
          <b>1234-5678-9012-3456</b> is a valid credit card number
          <br />
          <b>9876-54321098-7654</b> is not a valid credit card number
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="credit-card-number-space"
          name="credit-card-number-space"
          type="credit-card-number-space"
          label="Input type: credit-card-number-space"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid credit card number to test. A valid credit card
          number contains only 16 numeric characters delimited by space. For
          example:
          <br />
          <b>1234 5678 9012 3456</b> is a valid credit card number
          <br />
          <b>abcdefgh12345678</b> is not a valid credit card number
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="ccv"
          name="ccv"
          type="ccv"
          label="Input type: ccv"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid ccv value to test. A valid ccv contains only 3
          numeric characters. For example:
          <br />
          <b>123</b> is a valid ccv
          <br />
          <b>1234</b> is not a valid ccv
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="ccv-amex"
          name="ccv-amex"
          type="ccv-amex"
          label="Input type: ccv-amex"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid American express ccv value to test. A valid
          American express ccv contains only 4 numeric characters. For example:
          <br />
          <b>1234</b> is a valid amex ccv
          <br />
          <b>12</b> is not a valid amex ccv
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="ipv4"
          name="ipv4"
          type="ipv4"
          label="Input type: ipv4"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid IPV4 address to test. For example:
          <br />
          <b>192.168.0.1</b> is a valid IPV4
          <br />
          <b>192.168.0.1.</b> is not a valid IPV4
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="ipv6"
          name="ipv6"
          type="ipv6"
          label="Input type: ipv6"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid IPV6 address to test. For example:
          <br />
          <b>2001:0db8:85a3:0000:0000:8a2e:0370:7334</b> is a valid IPV6
          <br />
          <b>192.168.0.1</b> is not a valid IPV6
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="uuid"
          name="uuid"
          type="uuid"
          label="Input type: uuid"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid UUID (Universally Unique IDentifier) to test.
          For example:
          <br />
          <b>f47ac10b-58cc-4372-a567-0e02b2c3d479</b> is a valid UUID
          <br />
          <b>123e4567-e89b-12d3-a456-42665544000</b> is not a valid UUID
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="guid"
          name="guid"
          type="guid"
          label="Input type: guid"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid GUID (Globally unique identifier) to test. For
          example:
          <br />
          <b>3f2504e0-4f89-11d3-9a0c-0305e82c3301</b> is a valid GUID
          <br />
          <b>f47ac10b58cc4372a5670e02b2c3d479</b> is not a valid GUID
        </p>
      </div>
      <div className="form__fieldControl">
        <Input
          id="ssn"
          name="ssn"
          type="ssn"
          label="Input type: ssn"
          classes={{
            field: 'form__field',
            label: 'form__field__label',
            error: 'form__field__error-message',
          }}
        />
        <p>
          Enter a valid/invalid Social Security number to test. For example:
          <br />
          <b>123-45-6789</b> is a valid Social Security number
          <br />
          <b>123456789</b> is not a valid Social Security number
        </p>
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
