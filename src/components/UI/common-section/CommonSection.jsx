import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { updateNotifyStatus } from '../../../store/auth/authSlice';
import '../../../styles/common-section.css';

const CommonSection = (props) => {
  const notifyStatus = useSelector((state) => state.auth.notifyStatus);
  // const [showNotify, isShowNotify] = useState(notifyStatus);
  const dispatch = useDispatch();
  console.log(notifyStatus);

  useEffect(() => {
    setTimeout(() => dispatch(updateNotifyStatus('')), 3000);
  });

  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
      {notifyStatus && notifyStatus === 'succeed' && (
        <div className="notify">
          <span>
            <i className="ri-checkbox-circle-line"></i>You signed in succeed!
          </span>
          <i className="ri-emotion-happy-line"></i>
        </div>
      )}

      {notifyStatus && notifyStatus === 'failure' && (
        <div className="notify notify-failure">
          <span>
            <i className="ri-close-circle-line"></i>You signed in failure!
          </span>
          <i className="ri-emotion-unhappy-line"></i>
        </div>
      )}
    </section>
  );
};

export default CommonSection;
