import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, queryCache } from 'react-query';
import { Loading, LoadingOverlay, ServerError, ErrorBoundary, Input, Button } from 'components';
import Async from './Async';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';

export default {
  title: 'Async',
  component: Async,
  subcomponents: { Loading, LoadingOverlay, ServerError, ErrorBoundary },
  parameters: {
    componentSubtitle: 'Flexible HOC to abstract loading, error, and no data states.'
  }
};

const getAvatarInitials = name => {
  return name
    .split(' ')
    .splice(0, 2)
    .map(el => el[0])
    .join('')
    .toUpperCase();
};

const mockFetchUsers = ({ success, timeout = 1000 }) => () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([{ name: 'Daniel Pan' }, { name: 'William Huang' }, { name: 'Randy Dang' }]);
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};

const mockAddUser = ({ payload, success = true, timeout = 1000 }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ name: payload.name });
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};

export const Default = () => {
  const form = useForm({ defaultValues: { name: '' } });
  const usersQuery = useQuery('users', mockFetchUsers({ success: true }));
  const [addUser, usersMutation] = useMutation(mockAddUser, {
    onSuccess: data => {
      queryCache.setQueryData('users', [...usersQuery.data, data]);
    }
  });

  return (
    <>
      <Async queries={{ usersQuery }} mutations={{ usersMutation }}>
        {({ queries: { usersQuery: users } }) => (
          <form
            onSubmit={form.handleSubmit(data => {
              addUser({ payload: data, success: true });
            })}
          >
            <Grid item xs={12}>
              <Typography variant="h6">Users List</Typography>
              <div>
                <List dense>
                  {users.data.map((el, idx) => (
                    <ListItem key={`${el.name}-${idx}`}>
                      <ListItemAvatar>
                        <Avatar>{getAvatarInitials(el.name)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={el.name} />
                    </ListItem>
                  ))}
                </List>
              </div>

              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6}>
                  <Input
                    form={form}
                    name="name"
                    rules={{ required: 'Required' }}
                    placeholder="Enter a name"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Button type="submit">Add User</Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Async>
    </>
  );
};

export const WithCustomStateComponents = () => {
  const form = useForm({ defaultValues: { name: '' } });
  const usersQuery = useQuery('users', mockFetchUsers({ success: true }));
  const [addUser, usersMutation] = useMutation(mockAddUser, {
    onSuccess: data => {
      queryCache.setQueryData('users', [...usersQuery.data, data]);
    }
  });

  return (
    <>
      <Async
        queries={{ usersQuery }}
        mutations={{ usersMutation }}
        components={{
          Loading: ({ queries, mutations }) => {
            if (queries.usersQuery.status === 'loading') return 'Loading...';
            if (mutations.usersMutation.status === 'loading') return 'Adding Users...';
          }
        }}
      >
        {({ queries: { usersQuery: users } }) => (
          <form
            onSubmit={form.handleSubmit(data => {
              addUser({ payload: data, success: true });
            })}
          >
            <Grid item xs={12}>
              <Typography variant="h6">Users List</Typography>
              <div>
                <List dense>
                  {users.data.map((el, idx) => (
                    <ListItem key={`${el.name}-${idx}`}>
                      <ListItemAvatar>
                        <Avatar>{getAvatarInitials(el.name)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={el.name} />
                    </ListItem>
                  ))}
                </List>
              </div>

              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6}>
                  <Input
                    form={form}
                    name="name"
                    rules={{ required: 'Required' }}
                    placeholder="Enter a name"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Button type="submit">Add User</Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Async>
    </>
  );
};
