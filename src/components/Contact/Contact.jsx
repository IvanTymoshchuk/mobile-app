import { Titles } from 'components/Title/Title';
import {
  Section,
  Form,
  Input,
  Textarea,
  Button,
  SecTitle,
  WrapBtn,
  Btn,
  List,
  Items,
  Link,
} from './Contact.styled';
import { SubTitles } from 'components/Title/SubTitle/SubTitle';
import { SvgIcon } from 'components/Svg/Svg';

export const Contact = () => {
  return (
    <Section>
      <Titles text="Contact Us" color="white" margin={40} />
      <Form action="">
        <Input
          class="form-input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />

        <Input type="email" name="mails" id="mails" placeholder="E-mail" />
        <Textarea
          name="comment"
          id="comment"
          rows="4"
          placeholder="Message"
        ></Textarea>
        <Button>Submit</Button>
      </Form>
      <SecTitle>Get in touch with us</SecTitle>
      <SubTitles
        text="Have a question or comment about our app? Get in touch with us using the contact form below and our team will respond shortly."
        margin={50}
        color="white"
      />
      <WrapBtn>
        <Btn type="submit">
          <SvgIcon iconId="icon-facebook" width={20} height={20} />
        </Btn>
        <Btn type="submit">
          <SvgIcon iconId="icon-Twitter" width={20} height={20} />
        </Btn>
        <Btn type="submit">
          <SvgIcon iconId="icon-LinkedIn" width={20} height={20} />
        </Btn>
      </WrapBtn>
      <List>
        <Items>
          <Link href="">+xx-xxxx-xxxx-xx</Link>
        </Items>
        <Items>
          <Link href="">goIteens@gmail.com</Link>
        </Items>
      </List>
    </Section>
  );
};
