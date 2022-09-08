import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


{/* <form className="header-form w-100 bg-white m-0 p-0 d-flex justify-content-around align-items-center">
            <div className="d-flex align-items-center gap-1">
              {/* search bar */}
              <input
                className="form-control"
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              ></input>
              {/* search icon */}
              <BiSearch size={37} className="search-icon bg-primary p-2" />
            </div>

            <div className="notifications d-flex gap-5">
              <div>
                <Badge badgeContent={`3+`} color="error">
                  <NotificationsIcon color="action" />
                </Badge>
              </div>

              <div>
                <Badge badgeContent={7} color="error">
                  <MailIcon color="action" />
                </Badge>
              </div>
            </div>

            <div className="account d-flex">
              <div className="horizontal-rule">
                <HorizontalRuleIcon className="rule" />
              </div>
              <div className="d-flex gap-1">
                <div className="account-name">Douglas McGhee</div>
                <div className="account-picture">
                  <AccountCircleIcon />
                </div>
              </div>
            </div>
          </form> */}