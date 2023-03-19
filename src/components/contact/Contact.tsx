import { useForm } from '@formspree/react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';
import { TextField, Button } from '@mui/material';

const StyledElement = styled(Element)(({ theme }) => ({
    display: 'block',
}));

const StyledContainer = styled('div')(({ theme }) => ({
    width: '85%',
    height: '100%',
    background: 'rgb(203, 203, 203)',
    borderRadius: '6px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    paddingTop: '4%',
    paddingBottom: '5%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
        margin: '10% 0',
        height: '100%',
    },
}));

const StyledContent = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
    },
}));

const StyledLeftPanel = styled('div')(({ theme }) => ({
    width: '25%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    alignItems: 'baseline',
    justifyContent: 'baseline',
    marginTop: '15px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gridTemplateRows: 'repeat(2, 1fr)',
        marginTop: '40px',
        justifyContent: 'center',
        marginLeft: '-10%',
    },
    [theme.breakpoints.down('sm')]: {
        '& > div:last-child': {
            justifySelf: 'center',
            gridColumnStart: 'span 2',
        },
        width: '100%'
    },
}));

const StyledDetails = styled('div')(({ theme }) => ({
    margin: '4%',
    textAlign: 'center',
}));

const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
    fontSize: 'clamp(40px, 2vw, 50px)',
    color: '#e0761f',
    marginBottom: '10px',
}));

const StyledTopic = styled('div')(({ theme }) => ({
    fontSize: '1.3rem',
    fontWeight: '600',
}));

const StyledText = styled('div')(({ theme }) => ({
    fontSize: 'clamp(0.8rem, 1vw, 1.2rem)',
    color: '#6d6d74',
}));

const StyledRightPanel = styled('div')(({ theme }) => ({
    height: '80%',
    width: '75%',
    marginLeft: '6%',
    paddingRight: '10%',
}));

const StyledTopicText = styled('div')(({ theme }) => ({
    fontSize: '2.4rem',
    fontWeight: '600',
    color: '#000000',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    display: 'inline-block',
    marginTop: '12px',
    color: '#fff',
    fontSize: '1.3rem',
    outline: 'none',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    background: '#df6100',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: '#b94100',
    },
}));

const Contact = () => {
    const [state, handleSubmit] = useForm('xpzejagd');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <StyledElement id="ContactScrollSection" name="ContactScrollSection">
            <StyledContainer>
                <StyledContent>
                    <StyledLeftPanel>
                        <StyledDetails>
                            <StyledIcon icon={faMapMarker} />
                            <StyledTopic>Address</StyledTopic>
                            <StyledText>Montreal, QC</StyledText>
                        </StyledDetails>
                        <StyledDetails>
                            <StyledIcon icon={faPhone} />
                            <StyledTopic>Phone</StyledTopic>
                            <StyledText>514 922 9885</StyledText>
                        </StyledDetails>
                        <StyledDetails>
                            <StyledIcon icon={faEnvelope} />
                            <StyledTopic>Email</StyledTopic>
                            <StyledText>mihail.anghelici@mail.mcgill.ca</StyledText>
                        </StyledDetails>
                    </StyledLeftPanel>
                    <StyledRightPanel>
                        <StyledTopicText>Send me a message</StyledTopicText>
                        <p>
                            For any queries, questions, and offers, please send me an email. I
                            will respond immediately.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="message"
                                label="Name"
                                fullWidth
                                placeholder="Enter your name"
                                required
                                sx={{ marginBottom: '30px' }}
                                variant="standard"
                            />
                            <TextField
                                type="email"
                                label="Email"
                                fullWidth
                                placeholder="Enter your email"
                                required
                                sx={{ marginBottom: '30px' }}
                                variant="standard"
                            />
                            <TextField
                                type="text"
                                label="Message"
                                fullWidth
                                placeholder="Enter your message"
                                required
                                sx={{ marginBottom: '30px' }}
                                variant="standard"
                            />
                            <StyledButton type="submit">Send Now</StyledButton>
                        </form>
                    </StyledRightPanel>
                </StyledContent>
            </StyledContainer>
        </StyledElement>
    );
};

export default Contact;