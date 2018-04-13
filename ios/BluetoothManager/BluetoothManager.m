//
//  BluetoothManager.m
//  ReactNativeTutorial
//
//  Created by tomfriwel on 2018/4/13.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "BluetoothManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation BluetoothManager

-(instancetype)init {
  
  return [super init];
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(log:(NSString *)name number:(nonnull NSNumber *)number)
{
  RCTLogInfo(@"RCTLogInfo:My name is %@, number:%@", name, number);
}
//RCT_EXPORT_METHOD(bindEvent:(NSString *)name options:(NSDictionary *)options)
//{
//
//  NSString *location = [RCTConvert NSString:options[@"location"]];
//  NSDate *time = [RCTConvert NSDate:options[@"time"]];
//  RCTLogInfo(@"RCTLogInfo: %@, %@", location, time);
//}

RCT_EXPORT_METHOD(bindEvent:(NSString *)name callback:(RCTResponseSenderBlock)callback)
{
  callback(@[@"success"]);
}

@end
